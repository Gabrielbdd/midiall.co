import { createElement, Fragment, FunctionComponent } from 'preact'
import { useCallback, useMemo, useState } from 'preact/hooks'

import { Button } from '../../components/button/button'
import { CircularProgress } from '../../components/circular-progress/circular-progress'
import { Container } from '../../components/container/container'
import { Dialog } from '../../components/dialog/dialog'
import { MaskedInput } from '../../components/masked-input/masked-input'
import { instagram, telephone } from '../../components/masked-input/masks'
import { TextField } from '../../components/text-field/text-field'
import {
  emailPattern,
  Form,
  FormField,
  FormGroup,
  instagramPattern,
  minLength,
  required,
} from '../../modules/form'
import { useObservable } from '../../utils/use-observable'
import {
  ttuContainer,
  ttuDialogBody,
  ttuDialogButton,
  ttuDialogContainer,
  ttuDialogImage,
  ttuDialogTitle,
  ttuForm,
  ttuFormButton,
  ttuImage,
  ttuTitle,
  ttuWrapper,
} from './talk-to-us.scss'

const TalkToUs: FunctionComponent = () => {
  const formControl = useMemo(
    () =>
      new FormGroup({
        fullName: ['', [required, minLength(3)]],
        email: ['', [required, emailPattern, minLength(5)]],
        telephone: ['', [required, minLength(14)]],
        instagram: ['', [instagramPattern, minLength(1)]],
        body: [''],
      }),
    [],
  )
  const valid = useObservable(formControl.valid)
  const submitting = useObservable(formControl.submitting)
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleClose = useCallback(() => setDialogOpen(false), [])
  const handleSubmit = useCallback(async () => {
    const { body, ...sender } = formControl.values

    const success = await fetch(
      // process.env.API_URL,
      'https://api.midiall.co',
      {
        method: 'POST',
        body: JSON.stringify({ sender, body }),
      },
    )
      .then(({ ok }) => ok)
      .catch(err => {
        console.log(err)

        return false
      })

    success ? setDialogOpen(true) : alert('Erro desconhecido')

    return success
  }, [])

  return (
    <Fragment>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <div className={ttuDialogContainer}>
          <h2 className={ttuDialogTitle}>Mensagem recebida com sucesso!</h2>
          <img
            className={ttuDialogImage}
            src="/assets/message_sent.svg"
            alt="Homem com mão na cintura apoiado em uma carta com sinal de enviada."
          />
          <p className={ttuDialogBody}>
            Agora é só aguardar que em até 24 horas úteis um dos nossos
            especialistas entrará em contato com você.
          </p>
          <Button
            className={ttuDialogButton}
            rounded={false}
            outline={true}
            onClick={handleClose}
          >
            Ok
          </Button>
        </div>
      </Dialog>

      <div className={ttuWrapper}>
        <Container className={ttuContainer}>
          <h1 className={ttuTitle}>
            Entenda se essa é a solução certa para o seu negócio.
          </h1>

          <img
            className={ttuImage}
            src="/assets/contact_us.svg"
            alt="Pessoas em cima de uma escada enviado mensagens em seus celulares"
          />

          <Form
            className={ttuForm}
            control={formControl}
            onSubmit={handleSubmit}
          >
            <FormField name="fullName">
              {props => (
                <TextField
                  {...props}
                  id="name"
                  label="Nome"
                  placeholder="Nome completo"
                  required={true}
                />
              )}
            </FormField>

            <FormField name="email">
              {props => (
                <TextField
                  {...props}
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="seu_nome@empresa.com.br"
                  required={true}
                />
              )}
            </FormField>

            <FormField name="telephone">
              {props => (
                <MaskedInput
                  {...props}
                  mask={telephone}
                  id="tel"
                  label="Telefone"
                  type="tel"
                  placeholder="(31) 98888-8888"
                  required={true}
                />
              )}
            </FormField>

            <FormField name="instagram">
              {props => (
                <MaskedInput
                  {...props}
                  mask={instagram}
                  id="instagram"
                  label="Instagram"
                  placeholder="@sua_empresa"
                />
              )}
            </FormField>

            <FormField name="body">
              {props => (
                <TextField
                  {...props}
                  id="message"
                  label="Quais são os seus maiores desafios?"
                  placeholder="Marcar mais horários?"
                  multline={true}
                />
              )}
            </FormField>

            <Button rounded={false} disabled={!valid} className={ttuFormButton}>
              {!submitting ? 'Enviar' : <CircularProgress />}
            </Button>
          </Form>
        </Container>
      </div>
    </Fragment>
  )
}

export default TalkToUs
