class Store {
  constructor() {
    this.products = window.localStorage.getItem('products') && JSON.parse(window.localStorage.getItem('products')) || []
    this.userId = window.localStorage.getItem('userId') || 1
  }

  // 在observer中重写，实现实时更新
  update() {}

  save() {
    window.localStorage.setItem('products', JSON.stringify(this.products));
  }

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

    this.save()
    this.update()
  }

  deleteProduct(productId) {
    this.products = this.products.filter(d => d.productId !== productId)

    this.save()
    this.update()
  }

  changeNum(productId, productNum) {
    this.products = this.products.map((d) => {
      if (d.productId === productId) {
        d.productNum = productNum
      }
      return d
    })

    this.save()
    this.update()
  }

  changeCheck(productId, checked) {
    this.products = this.products.map((d) => {
      if (d.productId === productId) {
        d.checked = !d.checked
      }
      return d
    })

    this.save()
    this.update()
  }

  // 点击购买
  filterOld() {
    this.products = this.products.filter(d => !d.checked)

    this.save()
    this.update()
  }
}

export default new Store()
