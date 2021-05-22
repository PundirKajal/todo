import fetch from "isomorphic-unfetch";
import { ServerURL } from "../constants";
import TasksList from "../components/Task/list";

export default function Tasks({ tasks }) {
    return <TasksList tasks={tasks} />
}

export async function getStaticProps() {
    const res = await fetch(`${ServerURL}/task`);
    const tasks = await res.json();
    return {
        props: {
            tasks,
        },
    }
}