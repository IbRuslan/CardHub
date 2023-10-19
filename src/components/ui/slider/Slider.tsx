import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

const SuperSlider = forwardRef<
  ElementRef<typeof Slider.Root>,
  Omit<ComponentPropsWithoutRef<typeof Slider.Root>, 'value'> & {
    value?: (number | undefined)[]
  }
>(({ max, onValueChange, value, ...props }, ref) => {
  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value, onValueChange])

  return (
    <div className={s.container}>
      <div>
        <div className={s.value}>{value?.[0]}</div>
      </div>
      <Slider.Root
        className={s.root}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        {...props}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} />
        <Slider.Thumb className={s.thumb} />
      </Slider.Root>
      <div>
        <div className={s.value}>{value?.[1]}</div>
      </div>
    </div>
  )
})

SuperSlider.displayName = Slider.Root.displayName

export { SuperSlider }
