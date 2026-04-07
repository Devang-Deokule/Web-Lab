from flask import Flask, render_template, request
from forms import ContactForm
import pandas as pd

app = Flask(__name__)
app.secret_key = 'devang_secret'

@app.route('/contactus', methods=["GET", "POST"])
def get_contact():
    form = ContactForm()

    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]

        res = pd.DataFrame({
            'name': [name],
            'email': [email],
            'subject': [subject],
            'message': [message]
        })

        res.to_csv('contactusMessage.csv', mode='a', index=False, header=False)

    return render_template('contact.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)