import './index.css'



const FormCadastro =() =>{

    return (
          
<div className='Cadastro'>

    <div class="formCad">
      <div class="title">Olá</div>
      <div class="subtitle">Vamos criar sua conta!</div>
      <div class="input-container">
      <label className='label'>Nome</label>
        <input id="firstname" class="input" type="text" placeholder="Nome" />

       
        <label className='label'>Senha</label>
      
        <input id="senha" class="input" type="password" placeholder="Senha" />
       
     
      
        <label className='label'>Email</label>
        <input id="email" class="input" type="text" placeholder="Email" />
        <button type="text" class="submit">submit</button>
      </div>
     
    </div>
    </div>       

    )
}
export default FormCadastro;