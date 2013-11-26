/** @namespace */
var MGraph = (function (Kinetic) {
    "use strict";

    var _nodes = {},
        _edges = {},
        _adjacencies = {};

    function _objectToArray(obj) {
        var k, v, array = [];

        for (k in obj) {
            if (!obj.hasOwnProperty(k)) {
                continue;
            }

            v = obj[k];
            array.push(v);
        }

        return array;
    }

    function _addNode(node) {
        _nodes[node.id] = node;
    }

    function _createNode(node) {
    }

    function _getNodeById(nodeId) {
        return _nodes[nodeId];
    }

    function _getNodes() {
        return _objectToArray(_nodes);
    }

    function _getEdges() {
        return _objectToArray(_edges);
    }

    function _getAdjacencies() {
        return _objectToArray(_adjacencies);
    }

    function _s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    function _guid() {
        return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
    }

    /**
     * The object type representing a node
     * @typedef {Object} Node
     * @property {string} id - Indicates the unique identifier for the node
     * @property {string} text - Indicates the text displayed on the node
     * @property {string} url - Indicates the url for the nodes image
    */

    /**
     * A class representing a node.
     * @class
     * @param {...Node} node - The node object
    */
    function Node(node) {
        this.id = node.id;
        this.text = node.text;
        this.url = node.url;
    }

    Node.prototype.adjacencies = function () {
        return [];
    }

    Node.prototype.adjacentTo = function (node) {
        return false;
    }

    /**
     * The object type representing an edge
     * @typedef {Object} Edge
     * @property {string} id - Indicates the unique identifier for the edge
     * @property {string} text - Indicates the text displayed on the edge
     * @property {string} leftId - Indicates the unique identifier of the left nodes ID
     * @property {string} rightId - Indicates the unique identifier of the right nodes ID
    */

    /**
     * A class representing a edge.
     * @class
     * @param {...Edge} edge - The edge object
    */
    function Edge(edge) {
        this.id = edge.id;
        this.text = edge.text;
        this.leftId = edge.leftId;
        this.rightId = edge.rightId;
    }

    return {
        /** @namespace */
        id: {
            generate: _guid
        },
        /** @namespace */
        Graph: {
            addNode: _addNode,
            createNode: _createNode,
            getNodeById: _getNodeById,
            getNodes: _getNodes,
            getEdges: _getEdges,
            getAdjacencies: _getAdjacencies
        },
        Edge: Edge,
        Node: Node
    };
}(Kinetic));