Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}).mount("#app")

//表示ボタンを押したてもし、seenがtrueだったら文字を表示
//まずはVueを使って初期値を設定
Vue.createApp({
  data() {
    return {
      seen: false,
    }
  },
  //trueにする機能
  methods: {
    hyouji: function () {
      this.seen = true
    },
  },
}).mount("#v-if")

//サインインしたら「こんにちは〜〜さん」//サインアウトしたら「サインインしてください」

Vue.createApp({
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn: function () {
      this.user = {
        name: "太郎",
      }
      console.log(this.user.name)
    },
    signOut: function () {
      this.user = null
    },
  },
}).mount("#v-if-sign-in")

//配列を表示
Vue.createApp({
  data() {
    return {
      animals: ["ゴリラ", "キリン", "ライオン"],
    }
  },
  methods: {
    add() {
      this.animals.push("象")
    },
    pop() {
      this.animals.pop("")
    },
  },
}).mount("#v-for")

//
Vue.createApp({
  data() {
    return {
      helloClass: "Hello",
    }
  },
}).mount("#v-bind")

//
Vue.createApp({
  data() {
    return {
      items: [
        {
          name: "りんご",
          price: 150,
          amount: 3,
        },
        {
          name: "みかん",
          price: 100,
          amount: 5,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    total() {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
}).mount("#computed")

//
Vue.createApp({
  data() {
    return {
      inputValue: "",
    }
  },
}).mount("#v-model")

//
Vue.createApp({
  data() {
    return {
      memo: "",
      inputValue: "",
    }
  },
  created() {
    //今まで保存したものを読み込む
    //あればmemoに入れる
    const Memo = localStorage.memo
    if (Memo) {
      this.memo = Memo
    }
  },
  methods: {
    save() {
      localStorage.memo = this.inputValue
    },
  },
}).mount("#created")
