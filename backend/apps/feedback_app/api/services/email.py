import os
from django.core.mail import send_mail


def feedback_email(data: dict):
    '''Envia email após submissão do feedback'''
    send_mail(
        subject='Novo Feedback',
        from_email='Equipe Feedget <oi@feedget.com>',
        recipient_list=[f'{ os.environ["AUTHOR"] } <{ os.environ["AUTHOR_EMAIL"] }>'],
        fail_silently=False,
        message='',
        html_message='\n'.join([
            '<div style="font-family: sans-serif; font-size=16px; color=#111">',
                f'<p>Tipo do feedback: { data["type"] } </p>',
                f'<p>Comentário: { data["description"] } </p>',
                f'<img src="{ data["image"] }" height="500" width="500" />',
            '</div>'
        ])
    )
