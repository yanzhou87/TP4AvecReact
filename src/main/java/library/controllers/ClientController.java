//package library.controllers;
//
//import library.model.Client;
//import library.service.ServiceClient;
//import library.service.ServiceAdmin;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
////@Controller
//public class ClientController {
//
//    Logger logger = LoggerFactory.getLogger(ClientController.class);
//
//    private ServiceAdmin serviceLibrary;
//    private ServiceClient serviceClient;
//
//    public ClientController(ServiceAdmin serviceLibrary, ServiceClient serviceClient) {
//        this.serviceLibrary = serviceLibrary;
//        this.serviceClient = serviceClient;
//    }
//
//
////    public String getRootRequest(Model model) {
////        model.addAttribute("saveClient", "Save client");
////        model.addAttribute("saveNewBook", "Save New Book");
////        model.addAttribute("empruntBook", "Emprunt Book");
////        model.addAttribute("returnEmprunt", "Return Emprunt");
////        return "index";
////    }
////
////        @GetMapping("/clientcreate")
////    public String getClientCreate(@ModelAttribute SaveClientForm saveClientForm,
////                                  @PathVariable(required = false)String id,
////                                  Model model
////    ) {
////        saveClientForm = new SaveClientForm(new Client());
////        model.addAttribute("saveClientForm", saveClientForm);
////        return "saveClient";
////    }
////
////    @GetMapping("/clientcreate/{id}")
////    public String getClientCreateWithId(@ModelAttribute SaveClientForm saveClientForm,
////                           @PathVariable("id")String id,
////                           Model model
////                          ) {
////        saveClientForm = new SaveClientForm(new Client());
////        model.addAttribute("saveClientForm", saveClientForm);
////        return "clients";
////    }
////
////    @PostMapping("/clientcreate")
////    public String clientPost(@ModelAttribute SaveClientForm saveClientForm,
////                             BindingResult errors,
////                             Model model,
////                             RedirectAttributes redirectAttributes) {
////        logger.info("client: " + saveClientForm);
////        serviceLibrary.saveUser(saveClientForm.toClient());
////        redirectAttributes.addFlashAttribute("saveClientForm",saveClientForm);
////        saveClientForm = new SaveClientForm(new Client());
////        model.addAttribute("saveClientForm", saveClientForm);
////        return "redirect:clients";
////    }
////
////    @GetMapping("/clients")
////    public String getClients(Model model) {
////        model.addAttribute("pageTitle", "Mon Demo");
////        var clients = serviceClient.findAllClients();
////        model.addAttribute("clients", clients);
////        return "clients";
////    }
//
//
//
////    @GetMapping("/{id}")
////    @CrossOrigin(origins = "http://localhost:3000")
////    public List<Client> getClient(@PathVariable Long id) {
////        return serviceClient.getAllClients();
////    }
////
////    @PostMapping("/{id}")
////    @CrossOrigin(origins = "http://localhost:3000")
////    public ResponseEntity<Client> addClient(@RequestBody Client newClient, @PathVariable Long id) {
////        return serviceLibrary.saveClient(newClient).map(client -> ResponseEntity.status(HttpStatus.CREATED).body(client))
////                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
////    }
////
////    @PutMapping("/{id}")
////    @CrossOrigin(origins = "http://localhost:3000")
////    public ResponseEntity<Client> updateClient(@RequestBody Client newClient, @PathVariable Long id) {
////        return serviceLibrary.saveClient(newClient)
////                .map(client -> ResponseEntity.status(HttpStatus.CREATED).body(client))
////                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
////    }
////
//
//}
//
