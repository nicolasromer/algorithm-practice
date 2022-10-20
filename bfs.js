



const node = (value, children = []) => ({
	value, children
})

const tree = node(
	5, [
		node(7, [node(11)]),
		node(2, [node(15, [
					node(3),
					node(19)
					])])
	]
)

const bfs = (root, term) => {
	const queue = [root];
	const result = [];

	while (queue.length > 0) {
		const current = queue.shift();

		result.push(current.value);
		
		queue.push(...current.children);
	}

	console.log(result)
	return result;
}

bfs(tree, 3);