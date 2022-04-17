# card-generator
Cards Generator
It is a fun weekend project that was inspired by @kanmuteh1's willingness to strive for mastery whilst keeping the standards high.
I do encourage others who want to brush up on their skills to give this a try.

PS: Your suggestions and feedback are highly needed.

Instructions: Create a card generator that generates a card based on some metadata that will be discussed in the requirements below.

Tech Stack
NodeJs
Express
Common Sense :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye:
Requirements
No database setup is required, we will be using a JSON file and the format is below.

JSON Format:

{
  "cards": [
     {
         id_no: 1,
         name: "Carlos S. Nah",
         company_name: "Kwagei"
         job_title: "Software Engineer",
         dob: "1647005306660",
         img_url: "/project/public/img/carlos.jpg",
         created_at: "1647005306660",
         updated_at: ""
    }
   ]
}
Home Route (/)
A button when click redirects to the /create view
Display the list of cards in a grid format, styling is required
Create View (/create)
shows a form with the user's information
Card's Info
Name
Job title
Company name
Date Of Birth
User Img Url
ID No (not a field, it will be generated on the go)
All fields are required.
when you click on the generate button, it should generate user metadata, store it in a JSON, and redirect to the home route (/).
EndPoint Requirements
GET All Cards (/cards): *
returns the list of cards
GET A Card (/cards/:id)
gets a card that matches a card's id
POST Create Cards (/cards/create) *
creates a card based on the format below:
{
     id_no: 1,
     name: "Carlos S. Nah",
     company_name: "Kwagei"
     job_title: "Software Engineer",
     dob: "1647005306660",
     img_url: "/project/public/img/carlos.jpg",
     created_at: "1647005306660",
     updated_at: "1647005307770"
}
The above project is to be submitted here on Sunday 11:59 PM with a link to your repo and hosted version.