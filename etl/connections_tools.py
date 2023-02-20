def split_list(list_1):

    result = []
    if isinstance(list_1, list):
        for elem in list_1:
            elem_dict = {}

            try:
                name = elem.split(' <')[0]
                email = elem.split(' <')[1]
            except Exception:
                continue
            elem_dict['name'] = name
            elem_dict['email'] = email.replace('>', '')
            result.append(elem_dict)
    return result


def split_string(string_1):

    elem_dict = {}

    try:
        name = string_1.split(' <')[0]
        email = string_1.split(' <')[1]
    except Exception:
        return {}
    elem_dict['name'] = name
    elem_dict['email'] = email
    return elem_dict


def get_name(dict_1):
    try:
        result = dict_1['name']
    except Exception:
        return ''
    return result


def get_email(dict_1):
    try:
        result = dict_1['email']
    except Exception:
        return ''
    return result
