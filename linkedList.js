// 节点
function Node (val) {
  this.val = val
  this.next = null
}

// 链表
function LinkedList () {
  // const node = new Node()
  this.length = 0
  this.head = null
}

LinkedList.prototype = {
  // 返回所有元素
  list () {
    let currNode = this.head
    let arr = []
    if (!currNode) return currNode
    while (currNode.next) {
      arr.push(currNode)
      currNode = currNode.next
    }
    arr.push(currNode)
    return arr
  },
  // 尾部添加
  append (val) {
    const node = new Node(val)
    let currNode = this.head
    if (currNode) {
      while (currNode.next) {
        currNode = currNode.next
      }
      currNode.next = node
    } else {
      this.head = node
    }
  },
  // 指定位置添加
  insert (val, posi) {

  },
  // 移除
  remove (val) {

  },
  // 查找索引
  findIndex (val) {

  },
  // 指定位置移除
  removeAt (posi) {

  },
  // 空判断
  isEmpty () {

  },
  // 长度
  size () {

  },
  // 清空
  clear () {

  }
}

const log = console.log
log.bind(console)

const linkedList = new LinkedList()
log(linkedList.list())
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
log(linkedList.list())