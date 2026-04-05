import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

actor {
  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
    category : Text;
    imageId : Text;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let adminPrincipal = Principal.fromText("2vxsx-fae");
  let products = Map.empty<Nat, Product>();
  let submissions = List.empty<ContactSubmission>();

  func requireAdmin(caller : Principal) {
    if (not caller.equal(adminPrincipal)) {
      Runtime.trap("Unauthorized. Admin access required.");
    };
  };

  system func preupgrade() { };

  system func postupgrade() {
    // Seed sample products
    products.add(
      1,
      {
        id = 1;
        name = "Gold Necklace";
        description = "999 rupees (anti-tarnish waterproof)";
        price = 99900;
        category = "Necklace";
        imageId = "jewellery1";
      },
    );
    products.add(
      2,
      {
        id = 2;
        name = "Elegant Earrings";
        description = "499 rupees (long lasting shine)";
        price = 49900;
        category = "Earrings";
        imageId = "jewellery2";
      },
    );
    products.add(
      3,
      {
        id = 3;
        name = "Floral Bracelet";
        description = "699 rupees (rust-free finish)";
        price = 69900;
        category = "Bracelet";
        imageId = "jewellery3";
      },
    );
    products.add(
      4,
      {
        id = 4;
        name = "Rose Ring";
        description = "399 rupees (tarnish-resistant)";
        price = 39900;
        category = "Ring";
        imageId = "jewellery4";
      },
    );
    products.add(
      5,
      {
        id = 5;
        name = "Pearl Pendant";
        description = "1299 rupees (sterling silver base)";
        price = 129900;
        category = "Pendant";
        imageId = "jewellery5";
      },
    );
    products.add(
      6,
      {
        id = 6;
        name = "Bangle Set";
        description = "849 rupees (anti-oxidant coating)";
        price = 84900;
        category = "Bangles";
        imageId = "jewellery6";
      },
    );
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(
      func(p) { Text.equal(p.category, category) }
    );
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    requireAdmin(caller);
    submissions.toArray();
  };
};
