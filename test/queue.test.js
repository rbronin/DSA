const Queue = require("../Queue");

describe("# Queue Test", () => {
    describe("$ Queue Setup 101", () => {
        let queue = new Queue();
        test("Queue is defined", () => {
            expect(queue).toBeTruthy();
        })
        test("Queue has Enque method", () => {
            expect(queue.enque).toBeTruthy();
        })
        test("Queue has Deque method", () => {
            expect(queue.deque).toBeTruthy();
        })
        test("Queue has Front method", () => {
            expect(queue.front).toBeTruthy();
        })
        test("Queue has Back method", () => {
            expect(queue.back).toBeTruthy();
        })
        test("Queue has Size method", () => {
            expect(queue.size).toBeTruthy();
        })
    })
})