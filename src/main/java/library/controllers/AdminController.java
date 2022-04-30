//package library.controllers;
//
//import library.model.Admin;
//import library.model.Client;
//import library.service.ServiceClient;
//import library.service.ServiceAdmin;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/")
////@Controller
//public class AdminController {
//    Logger logger = LoggerFactory.getLogger(ClientController.class);
//
//    private ServiceAdmin serviceAdmin;
//    private ServiceClient serviceClient;
//
//    public AdminController(ServiceAdmin serviceAdmin, ServiceClient serviceClient) {
//        this.serviceAdmin = serviceAdmin;
//        this.serviceClient = serviceClient;
//    }
//
////    @GetMapping("/")
////    public String getRootRequest(Model model) {
////        model.addAttribute("saveAdmin", "Save admin");
////        model.addAttribute("saveNewClient", "Save New Client");
////      //  model.addAttribute("empruntBook", "Emprunt Book");
////      //  model.addAttribute("returnEmprunt", "Return Emprunt");
////        return "index";
////    }
////
////    @GetMapping("/admin")
////    public String getAdminCreate(@ModelAttribute SaveAdminForm saveAdminForm,
////                                  @PathVariable(required = false)String id,
////                                  Model model
////    ) {
////        saveAdminForm = new SaveAdminForm(new Admin());
////        model.addAttribute("saveClientForm", saveAdminForm);
////        return "saveAdmin";
////    }
////
////    @GetMapping("/admins/{id}")
////    public String getClientCreateWithId(@ModelAttribute SaveAdminForm saveAdminForm,
////                                        @PathVariable("id")String id,
////                                        Model model
////    ) {
////        saveAdminForm = new SaveAdminForm(new Admin());
////        model.addAttribute("saveClientForm", saveAdminForm);
////        return "admins";
////    }
////
////    @PostMapping("/addAdmin")
////    public String clientPost(@ModelAttribute SaveAdminForm saveAdminForm,
////                             BindingResult errors,
////                             Model model,
////                             RedirectAttributes redirectAttributes) {
////        logger.info("client: " + saveAdminForm);
////        serviceLibrary.saveUser(saveAdminForm.toAdmin());
////        redirectAttributes.addFlashAttribute("saveClientForm",saveAdminForm);
////        saveAdminForm = new SaveAdminForm(new Admin());
////        model.addAttribute("saveAdminForm", saveAdminForm);
////        return "redirect:admins";
////    }
////
////    @GetMapping("/admins")
////    public String getAdmins(Model model) {
////        model.addAttribute("pageTitle", "Mon Demo");
////        var admins = serviceUser.findAllAdmins();
////        model.addAttribute("admins", admins);
////        return "admins";
////    }
///////////////////
////    public List<Admin> getAllAdmins(){
////       return serviceUser.getAllAdmins();
////    }
////
////    @PostMapping("/{id}")
////    public Admin getAdmin(@PathVariable long id){
////        return serviceUser.findAdminById(id);
////    }
//
//
//
//}
