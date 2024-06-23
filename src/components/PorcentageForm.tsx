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
}

export const PorcentageForm: React.FC<PorcentageFormProps> = ({
  setTip
}) => {
  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold ">Propina</h2>

      <form action="">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <input 
              id={tip.id}
              type="radio" 
              name="tip"
              value={tip.value} 
              onChange={e => setTip(+e.target.value)}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
