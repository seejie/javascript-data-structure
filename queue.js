// 队列
function Queue () {
  this.queue = []
}

// 向队列尾部添加
Queue.prototype.enqueue = function (val) {
  this.queue.push(val)
}

// 从队列首位获取
Queue.prototype.dequeue = function () {
  return this.queue.shift()
}

// 获取队列长度
Queue.prototype.size = function () {
  return this.queue.length
}

// 判断队列是否为空
Queue.prototype.isEmpty = function () {
  return this.queue.length === 0
}

// 清空队列数据
Queue.prototype.clear = function () {
  this.queue = []
}

// 获取队列数据
Queue.prototype.list = function () {
  return this.queue
}

// 获取队列首位内容
Queue.prototype.peek = function () {
  return this.queue[0]
}

// 展示队列图像
Queue.prototype.graph = function () {
  console.log('latter')
}

// 格式化队列
Queue.prototype.format = function (arr) {
  this.queue = typeof arr === 'string' ? arr.split('') : arr
}


const log = console.log
log.bind(console)

// const queue = new Queue()
// queue.enqueue(1)
// log(queue.list())
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// log(queue.list())
// queue.dequeue()
// log(queue.list())

// 击鼓传花
function hotPotato (list, count) {
  let queue = new Queue()
  queue.format(list)
  while (queue.size() > 1) {
    for (let i = 0; i < count - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    console.log('淘汰: ' + queue.dequeue())
  }
  console.log('winner: ' + queue.dequeue())
} 

let arr = ['A', 'B', 'C', 'D', 'E', 'F']

hotPotato(arr, 10)