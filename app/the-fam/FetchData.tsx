import data from "../../public/data.json";

export async function FetchData(id: string | undefined, major: string | undefined): Promise<any> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data.filter(c => (((typeof id !== "undefined") ? c.id.includes(id) : c) && ((typeof major !== "undefined") ? c.jurusan === major : c))));
		}, 1000);
	});
}