const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

interface PorcentageFormProps{
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

export const PorcentageForm: React.FC<PorcentageFormProps> = ({
  setTip,
  tip
}) => {
  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold ">Propina</h2>

      <form action="">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <input 
              id={tipOption.id}
              type="radio" 
              name="tip"
              value={tipOption.value} 
              onChange={e => setTip(Number(e.target.value))}
              checked={tipOption.value == tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
