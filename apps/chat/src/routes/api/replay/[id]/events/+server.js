import { error } from "@sveltejs/kit";
import database from "$lib/server/database";

async function getRender(session, id) {
  try {
    const sql = database();
    const data = await sql`
      SELECT re.payload
      FROM replays_events re
      INNER JOIN replays r ON re.replay = r.id
      WHERE r.account = ${session}
      AND re.replay = ${id}
      AND re.type = 'render'
      ORDER BY re.id DESC
      LIMIT 1;
    `;

    return data[0]?.payload.data.src ?? null;
  } catch (err) {
    console.error("Error querying database: ", err);
    throw error(500, "Error loading replay render");
  }
}

async function getEvents(session, id) {
  try {
    const sql = database();

    const data = await sql`
      SELECT re.id, re.type, re.payload
      FROM replays_events re
      INNER JOIN replays r ON re.replay = r.id
      WHERE r.account = ${session}
      AND re.replay = ${id}
      AND re.type != 'render';
    `;

    return data;
  } catch (err) {
    console.error("Error querying database: ", err);
    throw error(500, "Error loading replay events");
  }
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, cookies }) {
  const { id } = params;

  const session = cookies.get("session");

  if (!session) {
    throw error(401, "Invalid session");
  }

  const [render = null, events = []] = await Promise.all([
    getRender(session, id),
    getEvents(session, id),
  ]);

  return new Response(JSON.stringify({ render, events }));
}
