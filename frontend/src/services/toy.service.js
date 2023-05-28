// import { storageService } from './async-storage.service.js'


// import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

// const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}

// _createToys()


// function _createToys() {
//     let toys = storageService.loadFromStorage(STORAGE_KEY)
//     if (!toys || !toys.length) {
//         toys = [
//             {
//                 _id: 't101',
//                 name: 'Talking Doll',
//                 price: 123,
//                 labels: ['Doll', 'Battery Powered', 'Baby'],
//                 createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: 't102',
//                 name: 'Talking Oshri',
//                 price: 200,
//                 labels: ['Doll', 'Battery Powered', 'Baby'],
//                 createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: 't103',
//                 name: 'Talking Hemos',
//                 price: 199,
//                 labels: ['Doll', 'Battery Powered', 'Baby'],
//                 createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: 't104',
//                 name: 'Talking Puki',
//                 price: 90,
//                 labels: ['Doll', 'Battery Powered', 'Baby'],
//                 createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: 't105',
//                 name: 'Talking Muki',
//                 price: 150,
//                 labels: ['Doll', 'Battery Powered', 'Baby'],
//                 createdAt: 1631031801011,
//                 inStock: true,
//             }
//         ]

//         storageService.saveToStorage(STORAGE_KEY, toys)
//     }
// }


// function query() {
//     return storageService.query(STORAGE_KEY)
// }
// function getById(toyId) {
//     return storageService.get(STORAGE_KEY, toyId)
// }
// function remove(toyId) {
//     return storageService.remove(STORAGE_KEY, toyId)
// }
// function save(toy) {
//     if (toy._id) {
//         return storageService.put(STORAGE_KEY, toy)
//     } else {
//         return storageService.post(STORAGE_KEY, toy)
//     }
// }

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}
function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}
function save(toy) {
    const method = (toy._id) ? 'put' : 'post'
    return httpService[method](BASE_URL, toy)
    // if (toy._id) {
    //     return httpService.put(BASE_URL, toy)
    // } else {
    //     return httpService.post(BASE_URL, toy)
    // }
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        inStock: true,
        labels: []
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: 0 }
}


