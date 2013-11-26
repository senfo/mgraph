describe('Graph', function () {
    describe('Node', function () {
        it('should allow fetching a node from the graph by its unique identifer', function () {
            var expected = new MGraph.Node({
                id: MGraph.id.generate(),
                text: MGraph.id.generate(),
                url: MGraph.id.generate()
            });

            MGraph.Graph.addNode(expected);

            var actual = MGraph.Graph.getNodeById(expected.id);

            expect(actual.id).toBe(expected.id);
            expect(actual.text).toBe(expected.text);
            expect(actual.url).toBe(expected.url);
        });

        it('should return the new node when created', function () {
            var expectedId = MGraph.id.generate();
            var expectedText = MGraph.id.generate();
            var expectedUrl = MGraph.id.generate();
            var actualNode = MGraph.Graph.createNode({
                id: expectedId,
                text: expectedText,
                url: expectedUrl
            });

            expect(actualNode.id).toBe(expectedId);
            expect(actualNode.text).toBe(expectedText);
            expect(actualNode.url).toBe(expectedUrl);
        });

        it('should indicate that two nodes are adjacent', function () {
            var node1 = new MGraph.Node({
                id: MGraph.id.generate(),
                text: 'node1',
                url: null
            });

            var node2 = new MGraph.Node({
                id: MGraph.id.generate(),
                text: 'node2',
                url: null
            });

            var edge = new MGraph.Edge({
                id: MGraph.id.generate(),
                edge: 'edge',
                leftId: node1.id,
                rightId: node2.id
            });
        });
    });
});