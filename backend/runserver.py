import socket, subprocess

PORT = '8000'

def get_ip_address():
    '''Return IP adress'''
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    return ip_address


def put_ip_in_api_file(folder: str):
    '''Put ip address in api.js'''
    FILE_PATTERN = 'const API_URL'
    file_path = fr'../{ folder }/src/services/api.ts'

    with open(file_path, 'r+') as f:
        lines = f.readlines()
        f.seek(0)

        for line in lines:
            if not line.startswith(FILE_PATTERN):
                f.write(line)
            else:
                f.write(f'{ FILE_PATTERN } = `{ get_ip_address() }:{ PORT }`\n')

        f.truncate()


def put_ip_in_env_file(folder: str, file_name='.env.local', file_pattern='API_URL'):
    '''Put ip address in api.js'''

    file_path = fr'../{ folder }/{ file_name }'

    with open(file_path, 'r+') as f:
        lines = f.readlines()
        f.seek(0)

        for line in lines:
            if not line.startswith(file_pattern):
                f.write(line)
            else:
                f.write(f'{ file_pattern }={ get_ip_address() }:{ PORT }\n')
        f.truncate()


def main():
    '''Run'''
    subprocess.call(f'python manage.py runserver { get_ip_address() }:{ PORT }', shell=True)


if __name__ == '__main__':
    put_ip_in_env_file('web', file_pattern='VITE_API_URL')
    put_ip_in_api_file('mobile')
    main()