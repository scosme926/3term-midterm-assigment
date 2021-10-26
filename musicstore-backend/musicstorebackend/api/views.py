import json
from django.http import JsonResponse
from django.http import HttpResponse
from django.core.paginator import Paginator
from .models import Instrument

def version_endpoint(request):
    return JsonResponse({
        "version": 2.0,
    })


def list_create_instruments_endpoint(request):
    if request.method == "GET":
        instruments = Instrument.objects.all()
        instruments_count = Instrument.objects.count()

        limit_numb = request.GET.get("limit", 25)
        paginator = Paginator(instruments, limit_numb)
        page_numb = request.GET.get("page")
        page_obj = paginator.get_page(page_numb)

        results = []
        for instrument in page_obj:
            r = {
                "id": instrument.id,
                "name": instrument.name,
                "price": instrument.price,
                "model": instrument.model,
                "brand": instrument.brand,
            }
            results.append(r)

        return JsonResponse({
            "count": instruments_count,
            "results": results,
        })

    elif request.method == "POST":
        data = json.loads(request.body)

        nam = data.get("name")
        p = data.get("price")
        m = data.get("model")
        b = data.get("brand")

        instrument = Instrument.objects.create(name=nam, price=p, model=m, brand=b)

        # Return success message to the client.
        return JsonResponse({ # VERSION A
            "msg": "record created",
        },status=201)



        # VERSION B
        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "model": instrument.model,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=201)
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)


def detail_update_delete_instruments_endpoint(request, id):
    # For example
    # if /api/instrument/1
    # then id=1
    # Get the record or return 404 error if D.N.E.
    try:
        instrument = Instrument.objects.get(id=id)
    except Instrument.DoesNotExist:
        return JsonResponse({"error":"d.n.e."},status=404)



    if request.method == "GET": # Details
        # "Serialization"
        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "model": instrument.model,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=200)



    elif request.method == "PUT": # Update
        data = json.loads(request.body)



        n = data.get("name")
        c = data.get("brand")
        p = data.get("price")
        cy = data.get("model")



        instrument.name = n
        instrument.brand = c
        instrument.price = p
        instrument.model = cy
        instrument.save()

        return JsonResponse({ # VERSION A
            "msg": "Your record have beeen uptade",
        },status=201)

        # "Serialization"
        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "model": instrument.model,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=200)



    elif request.method == "DELETE": # Delete
        instrument.delete()

        return JsonResponse({ # VERSION A
            "msg": "Your record was delete",
        },status=201)

        return JsonResponse({}, status=204)



    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)

def register_endpoint(request):
    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        email = data.get("email")
        password = data.get("password")
        username = data.get("username")



        user = User.objects.create_user(username, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.save()



        return JsonResponse({
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "username": user.username,
        })
    else:
        return JsonResponse({
        "msg": "method not allowed",
        }, status=405)




def login_endpoint(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")



        user = authenticate(request, username=username, password=password)
        if user is None:
            return JsonResponse({
                "msg": "username or password is incorrect",
            }, status=401)



        login(request, user)



        encoded_jwt = jwt.encode({"user_id": user.id}, SECRET_KEY, algorithm="HS256")



        return JsonResponse({
            "token": encoded_jwt,
        })



    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)
