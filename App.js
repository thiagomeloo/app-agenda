import React, { useState, useEffect } from 'react';
import { TextInput, View, FlatList, Alert, Text } from 'react-native';

//components
import ItemList from './src/components/ItemList';
import Button from './src/components/Button';
import ButtonOrder from './src/components/ButtonOrder';

import Data from './src/service/Data';

//styles
import style from './src/styles/AppStyle';


export default function App() {

  const key = 'KEY_AGENDA'

  const [lista, setLista] = useState([]);


  /**
   * Carrega a lista a primeira vez
  */
  useEffect(() => {
    async function run() {

      Data.get(key).then(data => {
        setLista(data)
      }).catch(err => {
        reset()
        return
      })

    }
    run()

  }, [])

  /**
  * Monitora as alterações na lista
  */
  useEffect(() => {
    Data.save(key, lista)
  }, [lista])

  const [nameBtn, setNameBtn] = useState('Salvar');
  const [orderList, setOrderList] = useState('asc');



  /**
   * Variaveis de inputs
   */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const [id, setId] = useState(0);



  /**
   * Limpa os inputs
   */
  const clearInputs = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setId(0);
    setNameBtn('Salvar');
  }


  /**
   * Prepara os inputs para atualizar
   * 
   * @param {Object} item 
   */
  const prepareUpdate = (item) => {
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setDate(item.date);
    setId(item.id);
    setNameBtn('Atualizar');
  }

  /**
   * Adiciona item a lista
   */
  const addItemList = () => {
    setLista(
      [...lista,
      {
        'id': (lista.length + 1),
        'name': (name),
        'email': (email),
        'phone': (phone),
        'date': (date)
      },
      ]);
  }

  /**
   * Remove item da lista
   * @param {Object} item 
   */
  const removeItemList = (item) => {
    Alert.alert(
      "Atenção",
      "Tem certeza que deseja remover este item?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setLista(lista.filter(items => items !== item))
        }
      ],
      { cancelable: false }
    )
  }

  /**
   * Edita o item da lista
   */
  const editItemList = () => {
    let listUpdate = [...lista];
    lista.map((data, index) => {
      if (id === data.id) {
        listUpdate[index].name = name
        listUpdate[index].email = email
        listUpdate[index].phone = phone
        listUpdate[index].date = date
      }

    });
    setLista(listUpdate);
  }

  /**
   * Evento do botao salvar
   */
  const saveItem = () => {
    if (nameBtn === 'Salvar') {
      addItemList();
    } else if (nameBtn === 'Atualizar') {
      editItemList();
    }
    clearInputs();
  };

  /**
   * Ordena a lista crescente
   */
  const sortAsc = () => {
    let listAux = lista.sort(
      function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
    setLista(listAux.map(item => { return item }));
  }

  /**
   * Ordena a lista decrescente
   */
  const sortDesc = () => {
    let listAux = lista.sort(
      function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase();
        return a == b ? 0 : a < b ? 1 : -1;
      });
    setLista(listAux.map(item => { return item }));
  }

  /**
   * Auxilia na troca do icon e ordenacao da lista
   */
  const auxOrder = () => {
    if (orderList == 'asc') {
      sortDesc();
      setOrderList('desc');
    } else {
      sortAsc();
      setOrderList('asc');

    }
  }

  return (
    <View style={style.container}>

      <View style={style.header} >
        <Text style={style.title}>Agenda</Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={style.inputText}
          autoCorrect={true}
          keyboardType={'default'}
          maxLength={500}
          placeholder={'Nome'}
        />
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={style.inputText}
          autoCorrect={true}
          keyboardType={'email-address'}
          maxLength={500}
          placeholder={'Email'}
        />
        <TextInput
          value={phone}
          onChangeText={text => setPhone(text)}
          style={style.inputText}
          autoCorrect={true}
          keyboardType={'phone-pad'}
          maxLength={500}
          placeholder={'Telefone'}
        />
        <TextInput
          value={date}
          onChangeText={text => setDate(text)}
          style={style.inputText}
          autoCorrect={true}
          keyboardType={'default'}
          maxLength={500}

          placeholder={'Data Nascimento'}
        />

        <Button text={nameBtn} onPress={() => { saveItem() }} />

      </View>

      <ButtonOrder
        order={orderList}
        onPress={() => { auxOrder() }}
      />

      <FlatList
        style={style.list}
        data={lista}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemList
            id={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            date={item.date}
            remove={() => removeItemList(item)}
            update={() => prepareUpdate(item)}
          >
          </ItemList>
        }

      />
    </View >
  );
}

