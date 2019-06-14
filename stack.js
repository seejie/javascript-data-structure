// 栈(堆heap)
function Stack () {
  this.stack = []
}

// 显示栈数据
Stack.prototype.list = function () {
  return this.stack
}

// 添加栈顶数据
Stack.prototype.push = function (item) {
  this.stack.push(item)
}

// 删除栈顶数据
Stack.prototype.pop = function () {
  return this.stack.pop()
}

// 获取栈顶数据
Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1]
}

// 获取栈数据长度
Stack.prototype.size = function () {
  return this.stack.length
}

// 清空栈数据
Stack.prototype.clear = function () {
  this.stack = []
}

// 是否为空栈
Stack.prototype.isEmpty = function () {
  return this.stack.length === 0
}

// 显示栈数据图
Stack.prototype.graph = function () {
  let top = '|_top_|'
  let bottom = '|_btm_|'
  let arr = this.list().map(val => `|__${val}__|`)
  arr.unshift(bottom)
  arr.push(top)
  for (let i = 0, len = arr.length - 1; len >= i; len--) {
    console.log(arr[len], '\n')
  }
}

// 字符串|数组转栈
Stack.prototype.format = function (val) {
  this.stack = typeof val === 'string' 
    ? val.split('').reverse() : val
}

let log = console.log
log.bind(console)

let stack = new Stack()

// stack.push(1)
// log(stack.list())
// stack.push(2)
// log(stack.peek())
// stack.push(3)
// log(stack.isEmpty())
// log(stack.size())
// stack.pop()
// log(stack.size())
// log(stack.peek())
// stack.clear()
// log(stack.isEmpty())

// log(stack.stack)

// 10 => '1010'
function _10T2(num) {
  let stack = new Stack()
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  if(!stack.isEmpty()) {
    return stack.list().reverse().toString().replace(/\,/g, '')
  }
}

// log(_10T2(35))



// '1010' => 10
function _2T10(num) {
  let stack = new Stack()
  stack.format(num)
  let total = 0
  while (!stack.isEmpty()) {
    total = total + stack.pop() * Math.pow(2, stack.size())
  }
  return total
}

// log(_2T10('100011')) 


// [1,1,2,2,3] => [3]
// [1,2,2,1] => []
// [1,1,1,2,2] => []
function duplicateRemoval (arr) {
  let stack = new Stack()
  let i = 0, len = arr.length
  let shouldBeDel = false
  let checkAgain = true

  while (shouldBeDel || checkAgain || i < len) {
    let curVal = arr[i]
    let topVal = stack.peek()
    // 如果curVal === topVal并且不是undefined
    if (curVal === topVal && curVal) {
      shouldBeDel = true
    }
    // 如果curVal !== topVal
    else {
      // 如果栈顶需要删除
      if (shouldBeDel) {
        stack.pop()
        checkAgain = true
        shouldBeDel = false
        continue
      }
      // 如果栈顶不需要删除
      else {
        // 如果curVal不为undefined推到栈顶
        curVal && stack.push(curVal)
        checkAgain = false
        shouldBeDel = false
      }
    }
    i++
  }
  console.log(stack.list())
}

var arr = [1,1,2,2,3]
// var arr = [1,2,2,1]
// var arr = [1,1,1,2,2]
// duplicateRemoval(arr)

