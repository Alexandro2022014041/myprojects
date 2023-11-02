package br.cesul.pedidoCesul.vendedor;

import at.favre.lib.crypto.bcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {
    @Autowired
    private IVendedorRepository repository;
    @PostMapping("/salvar")
    public ResponseEntity salvar(@RequestBody VendedorModel vendedorModel){
        try {
            if (repository.findByEmail(vendedorModel.getEmail()) != null){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário já cadastrado");
            }
            vendedorModel.setSenha(BCrypt.withDefaults().hashToString(12, vendedorModel.getSenha().toCharArray()));
            return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(vendedorModel));
        }catch (Exception e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(vendedorModel);
        }

    }

    @PostMapping("/login")
    public ResponseEntity login (@RequestBody VendedorModel vendedor){

       VendedorModel vendedorRetorno = repository.findByEmail(vendedor.getEmail());
       if(vendedorRetorno == null) {
           return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário e senha incorretos");
       }
       if(BCrypt.verifyer().verify(vendedor.getSenha().toCharArray(), vendedorRetorno.getSenha()).verified){
           return ResponseEntity.status(HttpStatus.OK).body(vendedorRetorno.getUuid());
       }
       return ResponseEntity.status(401).body("Não deu");
    }
}
