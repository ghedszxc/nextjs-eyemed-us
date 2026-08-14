import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '../Adapter'

type ISample = object

export class SampleAdapter extends Adapter<ISample, Nullable<ISample>> {
  adapt: (source: any) => Nullable<ISample> = source => {
    if (!source.length) return null
    return {}
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
