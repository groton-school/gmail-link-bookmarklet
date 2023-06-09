import './styles.scss';

(() => {
  const emailElt = document.querySelector('.gb_Ec div:not(.gb_Eb):last-child') as HTMLElement;
  const email = emailElt && emailElt.innerText ? emailElt.innerText : '0';
  navigator.clipboard.writeText(
    window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
  );
  const id = `notification-${crypto.randomUUID()}`;
  const message = document.createElement('div');
  const subject = (document.querySelector('.ha .hP') as HTMLElement).innerText;
  message.id = id;
  message.className = 'message';
  message.innerText = `Copied message link to "${subject}" to  clipboard`;
  document.body.append(message);
  setTimeout(() => document.body.querySelector(`#${id}`)?.remove(), 1000);
})();
