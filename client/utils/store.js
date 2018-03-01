class Store {
  constructor() {
    this.products = [];
  }

  // 在observer中重写，实现实时更新
  update() {}  

  addProduct(item) {
    let isExist = false;
    this.products = this.products.map((d) => {
      if (d.productId === item.productId) {
        d.productNum += item.productNum
        isExist = true
      }
      return d
    })
    if (!isExist) {
      this.products.push(item)
    }

    this.update()
  }

  deleteProduct(productId) {
    this.products = this.products.filter(d => d.productId !== productId)

    this.update()
  }

  changeNum(productId, productNum) {
    this.products = this.products.map((d) => {
      if (d.productId === productId) {
        d.productNum = productNum
      }
      return d
    })

    this.update()    
  }
}

export default new Store()
