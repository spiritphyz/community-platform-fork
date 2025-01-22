import { useNavigate } from 'react-router-dom'
import { DownloadButton, DownloadWithDonationAsk } from 'oa-components'

import { UserAction } from './UserAction'

import type { IUploadedFileMeta } from 'oa-shared'

interface IProps {
  handleClick: () => Promise<void>
  fileDownloadCount: number
  fileLink?: string
  files?: (IUploadedFileMeta | File | null)[]
}

export const DownloadWrapper = (props: IProps) => {
  const { handleClick, fileLink, files, fileDownloadCount } = props
  const hasFiles = files && files.length > 0

  const navigate = useNavigate()

  if (!fileLink && !hasFiles) {
    return null
  }

  const body = import.meta.env.VITE_DONATIONS_BODY
  const iframeSrc = import.meta.env.VITE_DONATIONS_IFRAME_SRC
  const imageURL = import.meta.env.VITE_DONATIONS_IMAGE_URL

  return (
    <UserAction
      loggedIn={
        <DownloadWithDonationAsk
          body={body}
          handleClick={handleClick}
          fileLink={fileLink}
          iframeSrc={iframeSrc}
          imageURL={imageURL}
          files={files}
          fileDownloadCount={fileDownloadCount}
        />
      }
      loggedOut={
        <DownloadButton
          isLoggedIn={false}
          fileDownloadCount={fileDownloadCount}
          onClick={() => navigate('/sign-in')}
        />
      }
    />
  )
}
