import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import { getSupportedProfileTypes } from 'src/modules/profile'
import { FocusSection } from 'src/pages/UserSettings/content/formSections/Focus.section'
import { headings } from 'src/pages/UserSettings/labels'
import { SettingsProvider } from 'src/test/components'

const supportedProfileTypes = getSupportedProfileTypes().map(
  ({ label }) => label,
)

describe('Focus', () => {
  it('render focus section if more than one activity available', async () => {
    const badges = supportedProfileTypes.reduce(
      (a, v) => ({
        ...a,
        [v]: {
          lowDetail: '',
          normal: '',
        },
      }),
      {},
    )

    render(
      <ThemeProvider theme={{ badges }}>
        <SettingsProvider>
          <FocusSection />
        </SettingsProvider>
      </ThemeProvider>,
    )

    expect(screen.queryByText(headings.focus)).toBeInTheDocument()
  })

  it('does not render focus section if less than two activities available', async () => {
    const badges = {
      [supportedProfileTypes[0]]: {
        lowDetail: '',
        normal: '',
      },
    }

    render(
      <ThemeProvider theme={{ badges }}>
        <SettingsProvider>
          <FocusSection />
        </SettingsProvider>
      </ThemeProvider>,
    )

    expect(screen.queryByText(headings.focus)).not.toBeInTheDocument()
  })
})
