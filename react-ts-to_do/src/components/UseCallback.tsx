import React, { useState, useCallback } from 'react'

type ButtonProp = {
  onClick: () => void
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProp) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されました')
  
  return <button onClick={onClick}>Decrement</button>
}

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
// 関数コンポーネントを用いているが親コンポーネントでonClickが再描画されているので
// 子コンポーネントであるIncrementButtonも再描画されている
const IncrementButton = React.memo((props: ButtonProp) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されました')

  return <button onClick={onClick}>Increment</button>
})

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProp) => {
  const { onClick } = props

  console.log('DoubleButtonが再描画されました')

  return <button onClick={onClick}>Double</button>
})

export const ParentUseCallback = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c -1 )
  }

  const increment = () => {
    setCount((c) => c + 1)
  }
  // useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2)
    // 第2引数は空配列なので、useCallBackは常に同じ関数を返す
    // つまり常にメモ化されているんおでDoubleButtonが再描画されることはない
  },[])

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す*/}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す*/}
      <IncrementButton onClick={increment}/>
      {/* メモ化コンポーネントに関数を渡す*/}
      <DoubleButton onClick={double}/>
    </div>
  )
}