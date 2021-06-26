import numpy as np


RI = { 1: 0.00, 2: 0.00, 3: 0.58, 4: 0.90, 5: 1.12, 6: 1.24, 7: 1.32, 8: 1.41, 9: 1.45, 10: 1.49}


MAT = [
        [1, 5, 4, 7],
        [1/5, 1, 1/2, 3],
        [1/4, 2, 1, 3],
        [1/7, 1/3, 1/3, 1]
]


def load_from_sample():
    data_file = open('data.sql', 'r')
    data_data = data_file.read().split('\n')
    data = []
    #2, 3, 5, 6
    required_titles = ['propertyRent', 'propertyDeposit', 'propertyType', 'propertyFloor']
    #titles = data_data[0].split('VALUES')[0][23:-2].split(',')
    #print(titles)
    print()
    #print(len((data_data[0].split('VALUES'))))
    
    for line in data_data:
        tmp = line.split('VALUES')[1]
        tmp = tmp.split('),(')
        #print(len(tmp))
        for dl in tmp:
            tp = dl.split(',')
            data.append([int(tp[2]), int(tp[1]), int(tp[5]), int(tp[6])])
        #print(len(data[-1]))
    
    #print([len(i) for i in data])
    #print(data[0])
    data_file.close()
    return np.array(data)


def load_data(data = None):
    if not data:
        return load_from_sample()
    return np.array(data).astype(np.float)


def load_ralative_importance_matrx(mat = None):
    size = 4
    a = np.array(mat).astype(np.float)

    #criterian weights
    e = np.sum(a/np.sum(a, axis=0), axis=1)/size
    
    #dot product of criterian and relative matrix
    g = np.sum(a * e, axis=1)
    j = (np.sum(g/e)/size - size) / (size - 1)
    k = j / RI[size]
    
    return e


def load_relative_weights(mat):
    if not mat:
        return load_ralative_importance_matrx(MAT)
    return load_ralative_importance_matrx(mat)


def ahp(data_location=None, mat=MAT):
    weights = load_relative_weights(mat)
    data = load_data(data_location)
    mins = np.amin(data, axis=0)
    norm_data = [mins/d for d in data]
    tmp_scores = [d * weights for d in norm_data]
    scores = np.array([np.sum(d * weights) for d in tmp_scores])
    temp = scores.argsort()
    temp = temp[::-1]
    ranks = np.empty_like(temp)
    ranks[temp] = np.arange(1, len(scores)+1)
    #for i in range(len(data)):
    #    print(',\t'.join([str(np.round(e, 4)) for e in data[i]]) + '\t==>\t', ranks[i])
    """
    for i in range(len(temp)):
        #print(',\t'.join([str(np.round(e, 4)) for e in norm_data[temp[i]]]) + '\t==>\t', i + 1)
        print(',\t'.join([str(np.round(e, 4)) for e in data[temp[i]]]) + '\t==>\t', i + 1)
        #print(',\t'.join([str(np.round(e, 4)) for e in tmp_scores[temp[i]]]) + '\t==>\t', i + 1)
        #print(str(scores[temp[i]]) + '\t==>\t', i + 1)
    """
    return ranks

if __name__ == '__main__':
    ahp()

