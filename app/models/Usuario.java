package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.ebean.Model;

@Entity
@Table(name="tb_usuario")
public class Usuario extends Model{
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_seq")
    @SequenceGenerator(name = "usuario_seq", sequenceName = "usuario_seq", allocationSize=1)
	@Column(name="usu_id")
	private Long id;
	@Column(name="usu_usu")
	private String usuario;
	@Column(name="usu_pas")
	private String password;
	@Column(name="usu_nom")
	private String nombre;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsuario() {
		return usuario;
	}
	
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public static Finder<Long,Usuario> find = new Finder<Long,Usuario>(Long.class, Usuario.class); 
	
}
