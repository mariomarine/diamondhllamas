import requests
import json

URL = 'https://diamondhllamas.s3.amazonaws.com/llamas.json'

def get_llamas():
    response = requests.get(URL)
    data = json.loads(response.content)
    return data

def lambda_handler(event, context):
    llamas = get_llamas()
    response = {
        'statusCode': 200,
        'body': json.dumps(llamas)
    }
    return(response)

if __name__ == '__main__':
    mock_event = {}
    mock_context = {}
    print(lambda_handler(mock_event, mock_context))

