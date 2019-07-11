export class Chat {
  constructor(private blacklist: Set<string>) {}

  public update = () => {
    const chat = this.getChat()

    if (!chat) {
      return
    }

    const classList = chat.classList
    const currentPath = globalThis.location.pathname
    const hiddeChat = this.blacklist.has(currentPath)

    hiddeChat ? classList.add('hidden') : classList.remove('hidden')
  }

  private getChat = () =>
    globalThis.document.querySelector('#hubspot-messages-iframe-container')
}
