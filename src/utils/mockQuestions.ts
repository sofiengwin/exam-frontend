export const questions = [
  [
    {
        "id": "5f82e1e1-f715-4a93-8b2a-eeeaad13c3e9",
        "questionId": "ce063c9a-c1da-4876-9f01-99241588537f",
        "questionText": "Which is the best way to enable S3 read-access for an EC2 instance?\n\n",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "1dcf6090-e283-48f8-9ec1-794b9f49ee7f",
                "text": "Create a new IAM role and grant read-access to S3. Store the role's credentials locally on the EC2 instance and configure your application to supply the credentials with each API request",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "4403f4f9-9d9a-458a-809b-23ef1ae142d2",
                "text": "Create a new IAM group and grant read access to S3. Store the group's credentials locally on the EC2 instance and configure your application to supply the credentials with each API request. ",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "8a935fd2-8d45-45e1-a464-93eeaaa091bb",
                "text": "Configure a bucket policy which grants read-access based on the EC2 instance name",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "15fb5596-8417-4a3c-a794-78d321b9eefd",
                "text": "Create an IAM role with read-access to S3 and assign the role to the EC2 instance",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "99657153-c87b-4473-a145-886543047b61",
        "questionId": "c46d2ddc-0ffd-4c61-b308-3af7d4de2233",
        "questionText": "Which of the following is NOT a feature of IAM?",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "5b477031-4813-463b-b163-e037f44f88a6",
                "text": "Fine-grained access control to AWS resources",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "cbab8f6c-db40-4864-8f84-72f0fd77e7b6",
                "text": "Allows you to set up biometric authentication, so that no passwords are required",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "a6347a4f-d57d-4699-a4e4-25867d448c91",
                "text": "Identity federation for delegated access to the AWS Management Console or AWS APIs",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "8ea3a425-b86b-4f11-b74a-d63a4a272a7b",
                "text": "Centralized control of your AWS account",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "cfbfb57e-636d-4311-88b4-5386b5aa3c2a",
        "questionId": "3e0bf4cd-6dcc-4ab6-a446-0ee61d98d737",
        "questionText": "What is an IAM Policy? ",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "49a4a239-e810-41ed-b9f1-f21b6523138e",
                "text": "A JSON document which defines one or more permissions",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "795d1889-f06a-44d0-8fe6-7cc33726ff7f",
                "text": "A file containing a user's private SSH key",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "37472720-8731-4238-8024-81e04c813f5b",
                "text": "The policy which determines how your AWS bill will be paid",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "821e6943-20ad-4c1e-b068-f13948fb20f8",
                "text": "A CSV file which contains a users Access Key and Secret Access Key",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "7a2ad453-b18f-41f9-8d00-7be139c02e8f",
        "questionId": "c0ae0c2c-b82d-4e97-a65e-8e9dd094a111",
        "questionText": "Which IAM entity can you use to delegate access to trusted entities such as IAM users, applications, or AWS services such as EC2?",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "c6497adc-eac9-49c8-972d-68205336b43a",
                "text": "IAM Role",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "f51c88fb-a680-482b-be17-eb9e55ce772e",
                "text": "IAM Web Identity Federation",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "8466ab04-835a-43e9-9b2f-c3e4bd21d5b8",
                "text": "IAM Group",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "d73b81d5-30c4-4f76-b8da-69104491e70c",
                "text": "IAM User",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "c0c581dd-ec61-439a-abc8-b0fae7a54b5b",
        "questionId": "3edb8159-264e-4383-a8ed-c92f9eb612c5",
        "questionText": "Which statement best describes IAM?",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "0e27c036-d9db-4256-9f31-dbb7c594465b",
                "text": "IAM allows you to manage users' passwords only. AWS staff must create new users for your organization. This is done by raising a ticket.",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "40ee9996-6787-4cb4-8020-c6ac38420422",
                "text": "IAM allows you to manage permissions for AWS resources only.",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "c4580529-695e-4f2b-a39a-0fcd8acec126",
                "text": "IAM allows you to manage users, groups, and roles and their corresponding level of access to the AWS Platform.",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "72a742a1-bcdf-4aac-b47d-4bf53c2db7d4",
                "text": "IAM stands for Improvised Application Management, and it allows you to deploy and manage applications in the AWS Cloud.",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "f1f02c04-5e92-4acc-b6b7-98156b762032",
        "questionId": "1ae20489-27a8-452d-841a-01df67ef8143",
        "questionText": "True or False? AWS recommends that EC2 instances have credentials stored on them so that the instances can access other resources (such as S3 buckets).",
        "type": "single-answer",
        "possibleCorrect": 1,
        "choices": [
            {
                "id": "efa76b33-0e6e-466c-9e87-8ff1831a8041",
                "text": "False",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "1f7264bb-a2b5-4f84-918b-b1bee198ebd5",
                "text": "True",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    },
    {
        "id": "46628a55-3ddf-43a1-baab-2d5c24af772e",
        "questionId": "c1da89f5-f42f-416f-8c25-3aec4ee8a262",
        "questionText": "In AWS, what is IAM used for?  ",
        "type": "multi-answer",
        "possibleCorrect": 3,
        "choices": [
            {
                "id": "e8ae1e9c-acd0-4f73-af9a-d758167f65b4",
                "text": "Creating and managing users and groups",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "2db863a5-1be8-4a89-94fc-ad476ab8a6fc",
                "text": "Managing access to AWS services",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "420886bf-3128-40fa-8c25-32fb93649b09",
                "text": "Secure VPN access to AWS",
                "__typename": "AssessmentsAttemptChoice"
            },
            {
                "id": "25b88b29-b9b2-4f92-8aad-ecfc55471af7",
                "text": "Assigning permissions to allow and deny access to AWS resources",
                "__typename": "AssessmentsAttemptChoice"
            }
        ],
        "__typename": "Assessments_AttemptQuestion"
    }
],
]
