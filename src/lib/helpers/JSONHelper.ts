function getPathRecursive(currObj: Record<string, unknown>, currPath: string[]): unknown {
	if (!currObj) {
		return undefined;
	} else if (currPath.length === 1) {
		return currObj[currPath[0]];
	} else {
		return getPathRecursive(currObj[currPath[0]] as Record<string, unknown>, currPath.slice(1));
	}
}

/**
 * Returns the value that references a nested path. E.g. foo.bar
 * @param object The object to search in
 * @param path The path to check
 * @returns The value found or undefined
 */
export function getPath(object: Record<string, unknown>, path: string): unknown {
	return getPathRecursive(object, path.split('.'));
}
