import { useState } from 'react'
import './types/booking.ts'
import './StatusContainer.tsx'
import './Card.tsx'
import type { EquipmentProps } from './types/booking.ts'


export default function App() {
  const [form, setForm] = useState<EquipmentProps>({
    id: "",
    assetName: "",
    laboratoryCode: "",
    isAssigned: {},
    capacityHours: "";
  });

  return (
    <>
    <main>
      <section>

      </section>
      <section>
        
      </section>
    </main>
    </>
  )

  function 
}
