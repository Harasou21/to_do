import React, { useState, useMemo } from 'react'

// import { UseMemoSample } fromで利用
export const UseMemoSample = () => {
  // textは現在のテキストボックスの中身の値を保持する
  const [text, setText] = useState('')
  // itemsは文字列のリストを保持する
  const [items, setItems] = useState<string[]>([])

  // React.ChangeEvent<HTMLInputElement>はイベントの型
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  // ボタンをクリックしたときに呼ばれる関数
  const onClickButton = () => {
    // いきなりprevItemsが出てきて困惑
    setItems((prevItems) => {
      // 現在の入力値をitemsに追加する、この時新しい配列を作成して保存する
      // ...とは何者
      // ...配列 で配列の要素をすべて展開する？
      return [...prevItems, text]
    })
    setText('')
  }

  // numberOfCharacters1は再描画の度にitem.reduceを実行して結果を得る
  // reduceの第一引数は処理前の値(直前の処理結果)
  // 第二引数は現在の要素の値
  // つまり配列の要素数を返している
  const nunberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  // numberOfCharacters2 はuseMemoを使いitemが更新されるタイミングでitems.reduceを実行して結果を得る

  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
    // 第二引数の配列の中にitemsがあるので、itemsが新しくなった時だけ関数を実行してメモを更新します
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
          <input value={text} onChange={onChangeInput} />
          <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {nunberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )

}