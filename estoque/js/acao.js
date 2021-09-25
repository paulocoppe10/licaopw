var url = 'https://integrador.profrodolfo.com.br/';

$(document).on('submit','#cadastroNivel', function(e){
    $.ajax({
        url: url+'niveis.php',
        data: $(this).serialize(),
        type: 'POST',
        success: function (retorno){
            $('#nome').val("");
            $('#saida').html(retorno);
            //atualiza a lista com o novo cadastro
            ListaNivel();
        }
    });
    
    //previne que o usuário seja redirecionado (envia os dados em sair)
    e.preventDefault();
});

ListaNivel();
ListaUsuario();

function ListaUsuario(){
  $.ajax({
      url: url+'usuario.php?list',
      type: 'GET',
      success: function(retorno){
        var users = JSON.parse(retorno);
        $('#userList').html("");
        for(var i=0; i<users.length; i++){
          var linha = '<tr><td>'+users[i].cd+'</td>';
          linha +='<td>'+users[i].nome+'</td>';
          linha +='<td>'+users[i].email+'</td>';
          linha +='<td>'+users[i].id_nivel+'</td>';
          linha +='<td>[edit | delete | nivel]</td></tr>';
          $('#userList').append(linha);
        } //oi gente bjus<3
      } // a aula já está acabando, vão salvando
  }); //para não perder o progresso º.º
}

function ListaNivel(){
    $.ajax({
       url: url+'niveis.php?list',
       type:'GET',
       success: function(retorno){
           var res = JSON.parse(retorno);
           $('#listaNivel').html("");
           for(i=0;i<res.length;i++){
               $('#listaNivel').append('<li>'+res[i].nome+' <span class="excluir" id="'+res[i].cd+'"> Excluir</span> </li>');
           }
       }
    });
}
function ListaOptionNivel(){
    $.ajax({
       url: url+'niveis.php?list',
       type:'GET',
       success: function(retorno){
           var res = JSON.parse(retorno);
           $('#nivel').html("");
           for(i=0;i<res.length;i++){
               $('#nivel').append('<option value="'+res[i].cd+'">'+res[i].nome+'</option>');
           }
       }
    });
}

$(document).on('click','.excluir',function(){
    var id = $(this).attr('id');
    $.ajax({
      url: url+'niveis.php',
      data:{'id': id},
      type: 'GET',
      success: function(retorno){        
        $('#saida').html(retorno);
        ListaNivel();
      }
    });
});

$(document).on('submit','#user',function(e){
  $.ajax({
    url: url+'usuario.php',
    data: $(this).serialize(),
    type: 'POST',
    success: function(retorno){
      $('#display').html(retorno);
    }
  });

e.preventDefault();
});

$(document).ready(function(){
 
 ListaOptionNivel();

});