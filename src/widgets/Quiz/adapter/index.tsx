import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IQuiz } from '../types'
import { getAdapterCTA } from '@/lib/utilities'

export class QuizAdapter extends Adapter<IQuiz, Nullable<IQuiz>> {
  adapt: (source: any) => Nullable<IQuiz> = source => {
    if (!source.length) return null
    const data = source[0]
    const resultsData = source?.filter(module => module?.type !== 'CMCollection')

    const questions =
      data?.items?.map(item => ({
        title: item?.teaserTitle || '',
        id: item?.id || null,
        cta: getAdapterCTA(item?.teaserTargets),
      })) || null

    const results =
      resultsData?.map(teaser => {
        const category = teaser?.settings?.otherproperties || {}
        return {
          title: teaser?.teaserTitle || '',
          body: teaser?.teaserText?.text || '',
          answer: Object.entries(category)?.map(([, value]) => value),
        }
      }) || null

    return {
      theme: data?.collectionTextOverlayStyle || '',
      title: data?.collectionTitle || '',
      questions,
      results,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
