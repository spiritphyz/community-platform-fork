import { CardButton } from '../CardButton/CardButton'
import { CardProfile } from '../CardProfile/CardProfile'
import { InternalLink } from '../InternalLink/InternalLink'

import type { IMapPin } from 'oa-shared'

export interface IProps {
  item: IMapPin
}

export const CardListItem = ({ item }: IProps) => {
  return (
    <InternalLink
      data-cy="CardListItem"
      data-testid="CardListItem"
      to={`/u/${item._id}`}
      sx={{
        borderRadius: 2,
        padding: 2,
      }}
    >
      <CardButton>
        <CardProfile item={item} />
      </CardButton>
    </InternalLink>
  )
}
