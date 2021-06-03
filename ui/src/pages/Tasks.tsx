import fetch from "isomorphic-unfetch";
import { ServerURL } from "../constants";
import TasksList from "../components/Task/list";

export default function Tasks({ tasks }) {
    return <TasksList tasks={tasks} />
}

export async function getStaticProps() {
/*  TODO-NtF: Getting error on build image, need to fix. 
const res = await fetch(`${ServerURL}/task`);
    const tasks = await res.json(); */
    return {
        props: {
            tasks: [{ id: 1, title: "Dockerization"}, { id: 2, title: "Multi-stage image"}],
        },
    }
}