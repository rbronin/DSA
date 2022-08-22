
class Queue {
    constructor() {
        this._data = []
    }

    enque(data) {
        this._data.push(data);
    }
    deque() {
        this._data.shift();
    }

    size() {
        return this._data.length;
    }
    front() {
        return this._data[0] || null;
    }
    back() {
        return this._data[(this.size() - 1)] || null;
    }

}

module.exports = Queue