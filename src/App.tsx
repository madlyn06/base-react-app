import { useEffect, useState } from 'react'
import './App.css'
const initialState = [
  {
    name: 'BAGNAIA Francesco',
    country: 'ITA',
    QAT: -1,
    IAN: 1,
    ARG: 11,
    AME: 11,
    POR: 8,
    SPA: 25,
    FRA: -1,
    ITA: 25,
    CAT: -1,
    GER: -1,
    NED: 25,
    GBR: 25,
    AUT: 25,
    RSM: 25,
    ARA: 20,
    JPN: -1,
    THA: 16,
    AUS: 16,
    MAL: 25,
    VAL: 7
  },
  {
    name: 'QUARTARARO Fabio',
    country: 'ITA',
    QAT: 7,
    IAN: 20,
    ARG: 8,
    AME: 9,
    POR: 25,
    SPA: 20,
    FRA: 13,
    ITA: 20,
    CAT: 25,
    GER: 25,
    NED: -1,
    GBR: 8,
    AUT: 20,
    RSM: 11,
    ARA: -1,
    JPN: 8,
    THA: 0,
    AUS: -1,
    MAL: 16,
    VAL: 13
  },
  {
    name: 'BASTIANINI Enea',
    country: 'ITA',
    QAT: 25,
    IAN: 5,
    ARG: 6,
    AME: 26,
    POR: -1,
    SPA: 8,
    FRA: 25,
    ITA: -1,
    CAT: -1,
    GER: 6,
    NED: 5,
    GBR: 13,
    AUT: -1,
    RSM: 20,
    ARA: 25,
    JPN: 7,
    THA: 10,
    AUS: 11,
    MAL: 20,
    VAL: 8
  },
  {
    name: 'ESPARGARO Aleix',
    country: 'ITA',
    QAT: 13,
    IAN: 7,
    ARG: 25,
    AME: 5,
    POR: 16,
    SPA: 16,
    FRA: 16,
    ITA: 26,
    CAT: 11,
    GER: 13,
    NED: 13,
    GBR: 7,
    AUT: 10,
    RSM: 10,
    ARA: 16,
    JPN: 0,
    THA: 5,
    AUS: 7,
    MAL: 6,
    VAL: -1
  },
  {
    name: 'MILLER Jack',
    country: 'ITA',
    QAT: -1,
    IAN: 13,
    ARG: 2,
    AME: 16,
    POR: -1,
    SPA: 11,
    FRA: 20,
    ITA: 1,
    CAT: 2,
    GER: 16,
    NED: 10,
    GBR: 16,
    AUT: 16,
    RSM: 0,
    ARA: 11,
    JPN: 25,
    THA: 20,
    AUS: -1,
    MAL: 10,
    VAL: -1
  },
  {
    name: 'BINDER Brad',
    country: 'ITA',
    QAT: 2,
    IAN: 8,
    ARG: 10,
    AME: 4,
    POR: -1,
    SPA: 6,
    FRA: 8,
    ITA: 9,
    CAT: 8,
    GER: 9,
    NED: 11,
    GBR: 5,
    AUT: 9,
    RSM: 8,
    ARA: 13,
    JPN: 20,
    THA: 6,
    AUS: 6,
    MAL: 8,
    VAL: 20
  },
  {
    name: 'RINS Alex',
    country: 'ITA',
    QAT: 9,
    IAN: 11,
    ARG: 16,
    AME: 20,
    POR: 13,
    SPA: 0,
    FRA: -1,
    ITA: -1,
    CAT: -1,
    GER: -1,
    NED: 6,
    GBR: 9,
    AUT: 8,
    RSM: 9,
    ARA: 7,
    JPN: -1,
    THA: 4,
    AUS: 25,
    MAL: 11,
    VAL: 25
  },
  {
    name: 'ZARCO Johann',
    country: 'ITA',
    QAT: 8,
    IAN: 16,
    ARG: -1,
    AME: 7,
    POR: 20,
    SPA: -1,
    FRA: 11,
    ITA: 13,
    CAT: 16,
    GER: 20,
    NED: 3,
    GBR: -1,
    AUT: 11,
    RSM: -1,
    ARA: 8,
    JPN: 5,
    THA: 13,
    AUS: 8,
    MAL: 7,
    VAL: -1
  },
  {
    name: 'MARTIN Jorge',
    country: 'ITA',
    QAT: -1,
    IAN: -1,
    ARG: 20,
    AME: 8,
    POR: -1,
    SPA: 0,
    FRA: -1,
    ITA: 3,
    CAT: 20,
    GER: 10,
    NED: 9,
    GBR: 11,
    AUT: 6,
    RSM: 7,
    ARA: 10,
    JPN: 16,
    THA: 7,
    AUS: 9,
    MAL: -1,
    VAL: 16
  },
  {
    name: 'OLIVEIRA Miguel',
    country: 'ITA',
    QAT: -1,
    IAN: 25,
    ARG: 3,
    AME: 0,
    POR: 11,
    SPA: 4,
    FRA: -1,
    ITA: 7,
    CAT: 7,
    GER: 7,
    NED: 7,
    GBR: 10,
    AUT: 4,
    RSM: 5,
    ARA: 5,
    JPN: 11,
    THA: 25,
    AUS: 4,
    MAL: 3,
    VAL: 11
  },
  {
    name: 'VIÑALES Maverick',
    country: 'ITA',
    QAT: 4,
    IAN: 0,
    ARG: 9,
    AME: 6,
    POR: 6,
    SPA: 2,
    FRA: 6,
    ITA: 4,
    CAT: 9,
    GER: -1,
    NED: 16,
    GBR: 20,
    AUT: 3,
    RSM: 16,
    ARA: 3,
    JPN: 9,
    THA: 9,
    AUS: 0,
    MAL: 0,
    VAL: -1
  },
  {
    name: 'MARINI Luca',
    country: 'ITA',
    QAT: 3,
    IAN: 2,
    ARG: 5,
    AME: 0,
    POR: 4,
    SPA: 0,
    FRA: 7,
    ITA: 10,
    CAT: 10,
    GER: 11,
    NED: 0,
    GBR: 4,
    AUT: 13,
    RSM: 13,
    ARA: 9,
    JPN: 10,
    THA: 0,
    AUS: 10,
    MAL: -1,
    VAL: 9
  }
]
function App() {
  const [data, setData] = useState(initialState)
  const [pointArr, setPointArr] = useState<number[]>([])
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const result = total(data[0])
    const pointArrCopy: number[] = []
    data.forEach((item) => {
      pointArrCopy.push(total(item))

      pointArrCopy.sort((a, b) => b - a)
      setPointArr(pointArrCopy)
    })
  }, [])
  console.log(data, 'data')
  const total = (item: any) => {
    let sum = 0
    for (const e in item) {
      if (item.hasOwnProperty(e) && typeof item[e] === 'number' && item[e] !== -1) {
        sum += item[e]
      }
    }
    return sum
  }
  // if (!highScore) return null
  return (
    <>
      <table className='border'>
        <tr className='border font-bold'>
          <td></td>
          <td>Rider</td>
          <td></td>
          <td>Point</td>
          <td>Leader</td>
          <td>Previous</td>
          <td>QAT</td>
          <td>IAN</td>
          <td>ARG</td>
          <td>AME</td>
          <td>POR</td>
          <td>SPA</td>
          <td>FRA</td>
          <td>ITA</td>
          <td>CAT</td>
          <td>GER</td>
          <td>NED</td>
          <td>GBR</td>
          <td>AUT</td>
          <td>RSM</td>
          <td>ARA</td>
          <td>JPN</td>
          <td>THA</td>
          <td>AUS</td>
          <td>MAL</td>
          <td>VAL</td>
        </tr>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className=''>{item.name}</td>
              <td className='px-5'>{item.country}</td>
              <td className='px-5'>{pointArr[index]}</td>
              <td className='px-7'>{pointArr[0] - total(item)}</td>
              <td className='px-5'>{index !== 0 ? total(data[index - 1]) - total(data[index]) : ''}</td>
              <td className='px-3'>{item.QAT}</td>
              <td className='px-3'>{item.IAN}</td>
              <td className='px-3'>{item.ARG}</td>
              <td className='px-3'>{item.AME}</td>
              <td className='px-3'>{item.POR}</td>
              <td className='px-3'>{item.SPA}</td>
              <td className='px-3'>{item.FRA}</td>
              <td className='px-3'>{item.ITA}</td>
              <td className='px-3'>{item.CAT}</td>
              <td className='px-3'>{item.GER}</td>
              <td className='px-3'>{item.NED}</td>
              <td className='px-3'>{item.GBR}</td>
              <td className='px-3'>{item.AUT}</td>
              <td className='px-3'>{item.RSM}</td>
              <td className='px-3'>{item.ARA}</td>
              <td className='px-3'>{item.JPN}</td>
              <td className='px-3'>{item.THA}</td>
              <td className='px-3'>{item.AUS}</td>
              <td className='px-3'>{item.MAL}</td>
              <td className='px-3'>{item.VAL}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default App
