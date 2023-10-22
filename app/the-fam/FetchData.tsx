import data from "../../public/data.json";

export async function FetchData(id: string | undefined, major: string | undefined): Promise<any> {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (typeof id === "undefined") {
				resolve(data)
			} else {
				resolve(data.filter(c => (c.id.includes(id!) && c.jurusan === major)));
			}
		}, 1000);
	});
}