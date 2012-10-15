package controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import models.Usuario;

import play.*;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

	public static Result index() {
		return ok(index.render());
	}

	public static Result list() {
		List<Usuario> usuarios = Usuario.find.all();
		return ok(Json.toJson(usuarios));
	}

	public static Result create() {
		Form<Usuario> usuarioForm = form(Usuario.class).bindFromRequest();
		Usuario usuario=usuarioForm.get();
		usuario.save();
		Map<String, String> resultado=new HashMap<String, String>();
    	resultado.put("success", "1");
    	resultado.put("msg", "Se creo el usuario");
		return ok(Json.toJson(resultado));
	}

	public static Result update() {
		Form<Usuario> usuarioForm = form(Usuario.class).bindFromRequest();
		Usuario usuario=usuarioForm.get();
		usuario.update();
		Map<String, String> resultado=new HashMap<String, String>();
    	resultado.put("success", "1");
    	resultado.put("msg", "Se modifico el usuario");
		return ok(Json.toJson(resultado));
	}

	public static Result delete() {
		Form<Usuario> usuarioForm = form(Usuario.class).bindFromRequest();
		Usuario.find.ref(usuarioForm.get().getId()).delete();
		Map<String, String> resultado=new HashMap<String, String>();
    	resultado.put("success", "1");
    	resultado.put("msg", "Se elimino el usuario");
		return ok(Json.toJson(resultado));
	}

}