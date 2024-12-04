/**
 * Gets the value that references a nested path. E.g. foo.bar
 * @param object The object to search in
 * @param path The path to get
 * @returns The value at the specified path or undefined if not found
 */
export function getPath(object: Record<string, unknown>, path: string): unknown {
	const keys = path.split('.');
	let currObj = object;

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (!currObj || !currObj.hasOwnProperty(key)) {
			return undefined;
		}
		currObj = currObj[key] as Record<string, unknown>;
	}

	return currObj;
}
